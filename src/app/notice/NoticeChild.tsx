//NoticeChild.tsx
//클라이언트 컴포넌트 선언
"use client";
import { NoticeType } from "@/model/notice";
import React, { useEffect, useState } from "react";
import style from "./NoticeChild.module.scss";
import { useQuery } from "react-query";

const maxPostPage = 10;
const itmesPerPage = 10;

const NoticeChild = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  // console.log(totalPage);

  //API를 가지고 오는 함수 생성
  async function fetchPosts(pageNum: number) {
    const result = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNum}`
    );
    const item = (await result.json()) as NoticeType[];

    return item;
  }

  async function fetchTotalCount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const totalCount = await response.json();
    setTotalPage(Math.ceil(totalCount.length / itmesPerPage));
    console.log("totalCount.length", totalCount.length);
    console.log("itmesPerPage", itmesPerPage);
  }

  useEffect(() => {
    fetchTotalCount();
  }, []);

  /*첫번째 매개변수: posts라는 이름의 key 생성
   - 배열로 만들면 첫번째 인덱스는 쿼리키이고
     두번째 인덱스는 쿼리키가 겹치지 않도록 바뀐 쿼리를 감지해서 
     새 쿼리 키에 대한 데이터를 업데이트 한다.
  */
  /*두번째 매개변수: API를 가지고 오는 함수명
    두번째 인덱스에서 바뀐쿼리를 감지해서 새 쿼리 키에 대한 데이터를 업데이트
    하려면 함수도 currentPage가 바뀔때마다 바뀌어야한다.
    의존성 배열로 작동하기 때문이다.
  */

  const { data, isLoading, isError } = useQuery(["posts", currentPage], () =>
    fetchPosts(currentPage)
  );

  if (isLoading) return <p>로딩중...</p>;
  if (isError) return <p>Error</p>;

  //처음에는 undefined 값이 나오기 때문에 예외처리 해줘야함
  if (!data) return <div></div>;
  let startPage = 1;
  let endPage = 5;
  //page number list 생성 함수
  const getPages = () => {
    const elements: JSX.Element[] = [];

    if (currentPage >= 5) {
      startPage = currentPage - 4;
      endPage = currentPage;
    }

    for (let i = startPage; i <= endPage; i++) {
      elements.push(
        <button
          className={`${style.num_btn} ${
            currentPage === i ? style.active : ""
          }`}
          onClick={() => setCurrentPage(i)}
          key={i}
          disabled={currentPage === i}
        >
          {i}
        </button>
      );
    }
    return elements;
  };

  return (
    <>
      <ul className={style.wrap}>
        {data.map((data) => {
          return (
            <li key={data.id}>
              <span className={style.id}>{data.id}</span>
              <span>{data.title}</span>
            </li>
          );
        })}
      </ul>
      <div className={style.button_wrap}>
        <div className={style.left}>
          <button
            onClick={() => {
              setCurrentPage(1);
            }}
          >
            처음으로
          </button>
          <button
            disabled={currentPage <= 1}
            onClick={() => {
              setCurrentPage((prevValue) => prevValue - 1);
            }}
          >
            prev
          </button>
        </div>
        <div className={style.middle}>{getPages()}</div>

        <div className={style.right}>
          <button
            disabled={currentPage >= maxPostPage}
            onClick={() => {
              setCurrentPage((prevValue) => prevValue + 1);
            }}
          >
            next
          </button>
          <button
            onClick={() => {
              setCurrentPage(totalPage);
            }}
          >
            마지막으로
          </button>
        </div>
      </div>
    </>
  );
};

export default NoticeChild;

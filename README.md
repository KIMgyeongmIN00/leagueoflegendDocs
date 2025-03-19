# League Of Legend DOCS ![Riot Games](https://img.shields.io/badge/riotgames-D32936.svg?style=for-the-badge&logo=riotgames&logoColor=white)

이번 개인 프로젝트는 인기 게임 리그오브레전드의 open API를 사용하여 간단한 정보 사이트를 하나 만드려고 합니다.

이번 프로젝트는 TypeScript와 Next.js로 만드는 첫 프로젝트 입니다.

TypeScript를 활용해 정적 타입 검사를 하여 코드의 안정성을 올리고,
<br>
Next.js에서 제공하는 파일 라우팅 시스템, cache를 활용한 렌더링 종류별 활용 등을 공부한다 생각하며 만들 예정입니다.

---

## 사용 기술

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

---

## Github rules

- 브랜치 나누어 작업하기
- 브랜치 명은 feat(기능),style(스타일),refactor(리팩토링)으로 시작
- 커밋은 단위별로 나누어 작업하기.
- 그러나 다음 날로 이전 시 미완성 단위로 세이브 가능
- 커밋의 설명은 "브랜치 종류: 상세한 단위 설명"으로 적기

---

## 나만의 룰

- 최대한 관심사를 분리하여 클린한 코드 만들기
- 커스텀 훅은 use로 시작
- 기능 함수는 handle로 시작
- 새로운 기술을 위주로 고도화하기 (Next.js, TypeScript 등)
- UX 향상 주의적 시점으로 프로젝트 완성도 올리기
- 모든 기능은 해당 페이지 파일을 지워도 프로젝트에 오류가 나지 않게 하기

---

## 진행 기간

**[250310 ~ 250319]**

8일 진행

---

## 기능

- ISR 렌더링 방식의 챔피언 목록 페이지
- SSR 렌더링 방식의 챔피언 상세 페이지
- CSR 렌더링 방식의 챔피언 로테이션 페이지
- SSG 렌더링 방식의 아이템 목록 페이지
- 챔피언 목록 페이지 내부의 클라이언트 페이지를 통한 검색기능
- 검색 디바운싱
- 쿼리 스트링 검색 방식
- 유틸리티 타입 활용
- 스켈레톤 UI를 통한 로딩 표현

---

## 프로젝트 발자국

- [SSG 렌더링 이거 좀 재밌는데?](https://velog.io/@rlarudals61/250311-SSG-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%9E%90%EC%84%B8%ED%9E%88-%EB%B3%B4%EC%9E%90)

- [Next의 계륵! Image 태그!](https://velog.io/@rlarudals61/250312Next.js%EC%9D%98-%EC%9A%95%EC%8B%AC-Image)

- [Next 입 맛이 좀 까다롭네;](https://velog.io/@rlarudals61/250313-%EB%84%A5%EC%8A%A4%ED%8A%B8-%EC%9E%85%EB%A7%9B-%EB%A7%9E%EC%B6%B0%EC%A3%BC%EA%B8%B0-%EC%B0%B8-%EC%96%B4%EB%A0%B5%EB%84%A4)

- [쿼리 스트링을 쓰려면 기다려야해요.](https://velog.io/@rlarudals61/250314-Next.js%EA%B0%80-%EC%99%9C-%EC%9D%B4%EB%A0%87%EA%B2%8C-%ED%95%98%EB%9D%BC%EA%B3%A0-%ED%95%98%EB%8A%94%EC%A7%80-%EC%95%8C%EC%95%84)

---

## 회고

- 마무리 한 후 다시 살펴보니 클린 코드를 만들자 해놓고 매직 넘버 처리를 안했습니다. 또, 상수를 따로 관리하지 않아 queryKey도 그냥 배열로 들어있고 apikey라는 변수도 해당 컴포넌트에서 선언하여 좋지 못한 가독성이 되었습니다.
- 로딩&에러 핸들링을 하긴 하였으나 404 에러도 처리 안되었고 API에서 error를 던져주는 과정에서 반환되는 타입 문제로 통신 에러에 대해 핸들링을 못하였습니다.
- 소환사 전적 검색을 만들고 싶었으나 소환사 태그를 처리하는 과정이 매끄럽지 못해 검색의 불편이 있었고, 결국엔 구현 실패로 까지 이어져 아쉬움이 남습니다.
- 아이템 및 챔피언을 fetch 해 올 때에 모든 데이터를 한 번에 가져와 초기 fetch에 버벅임이 있는게 아쉽습니다.
- 그래도 Next.js의 초기 세팅부터 디테일까지 감이 잡혔고 다음 Next.js를 사용하는 프로젝트에서는 이것저것 활용도 하고 렌더링 기법에 따른 고도화도 하여 좋은 프로젝트를 완성 하겠습니다.

---

## 배포

> [**배포 사이트**](https://leagueoflegend-docs.vercel.app/)

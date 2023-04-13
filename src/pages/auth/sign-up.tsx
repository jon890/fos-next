import Layout from "@/components/Layout";
import { TextInput } from "@/components/TextInput";
import { GetStaticProps } from "next";
import { ReactElement } from "react";

// 회원가입
export default function SignUp() {
  return (
    <div className="w-full flex items-center h-[85vh]">
      <div className="w-full flex flex-col space-y-2 justify-center items-center">
        <TextInput label="아이디" placeholder="아이디를 입력해주세요" />
        <TextInput label="닉네임" placeholder="닉네임을 입력해주세요" />
        <TextInput
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
        />
        <TextInput
          type="password"
          label="비밀번호 확인"
          placeholder="비밀번호 확인을 입력해주세요"
        />
      </div>
      <div></div>
    </div>
  );
}

SignUp.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

// export const getStaticProps: GetStaticProps = async () => {
//   return {
//     // props: { ...user, id: user.id.toString() },
//     props: {},
//     revalidate: 10,
//   };
// };

import Layout from "@/components/Layout";
import { TextInput } from "@/components/TextInput";
import { GetStaticProps } from "next";
import { ReactElement } from "react";
import { useForm } from "react-hook-form";

type SignUpParams = {
  id: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
};

// 회원가입
export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isDirty },
  } = useForm<SignUpParams>();

  const onSubmit = (data: SignUpParams) => {
    console.log(data);
  };

  return (
    <div className="w-full flex items-center h-[85vh]">
      <form
        className="w-full flex flex-col space-y-2 justify-center items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextInput
          label="아이디"
          placeholder="아이디를 입력해주세요"
          register={register("id", { required: true })}
        />
        <TextInput
          label="닉네임"
          placeholder="닉네임을 입력해주세요"
          register={register("nickname", { required: true })}
        />
        <TextInput
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          register={register("password", { required: true })}
        />
        <TextInput
          type="password"
          label="비밀번호 확인"
          placeholder="비밀번호 확인을 입력해주세요"
          register={register("passwordConfirm", { required: true })}
        />

        <div className="space-x-4 mt-10">
          <button className="btn btn-primary" type="submit">
            가입하기
          </button>
          <button className="btn btn-error text-white" type="button">
            취소
          </button>
        </div>
      </form>
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

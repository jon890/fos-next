import Layout from "@/components/Layout";
import { GetStaticProps } from "next";
import { Inter } from "next/font/google";
import { ReactElement } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <div>HOME!!</div>;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async () => {
  // const user = await prisma.user.create({
  //   data: {
  //     nickname: "test",
  //     password: "hhh",
  //   },
  // });

  return {
    // props: { ...user, id: user.id.toString() },
    props: {},
    revalidate: 10,
  };
};

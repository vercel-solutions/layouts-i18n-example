import type {GetStaticProps} from "next";

import {ParsedUrlQuery} from "querystring";

type ServerProps = {
  translations: Record<string, string>;
};

type Props = {
  children: JSX.Element;
};

type Params = ParsedUrlQuery & {
  locale: string;
};

export const getStaticProps: GetStaticProps<ServerProps, Params> = async ({params}) => {
  const translations: Record<string, string> = await import(
    `../../translations/${params!.locale}`
  ).then((res) => res.default);

  return {
    props: {
      translations,
    },
  };
};

const IndexLayout: React.FC<ServerProps & Props> = ({
  children,
  translations: {greet, copyright},
}) => {
  return (
    <div>
      <h1>{greet}</h1>
      {children}
      <footer>{copyright}</footer>
    </div>
  );
};

export default IndexLayout;

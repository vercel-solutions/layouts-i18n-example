import type {GetStaticProps} from "next";

import {ParsedUrlQuery} from "querystring";

import api from "../../api";
import Counter from "../../components/Counter.client";

type Props = {
  translations: Record<string, string>;
};

type Params = ParsedUrlQuery & {
  locale: string;
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({params}) => {
  const translations = await api.translations.fetch(params?.locale);

  return {
    props: {
      translations,
    },
  };
};

const IndexPage: React.FC<Props> = ({translations: {counter}}) => {
  return (
    <section>
      <Counter translations={{counter}} />
    </section>
  );
};

export default IndexPage;

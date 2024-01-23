import BookDetailActions from "./BookDetailActions";
import BookDetailFooter from "./BookDetailFooter";
import BookDetailHeader from "./BookDetailHeader";
import BookDetailInformation from "./BookDetailInformation";
import BookImage from "./_BookImage";
import BookStickyContainer from "./_BookStickyImageContainer";
import Layout from "./_Layout";

export default function BookDetailLayout({ book = {} }) {
  return (
    <Layout>
      <BookDetailHeader book={book} />
      <BookStickyContainer>
        <BookImage src={book.image} alt={book.name} />
        <BookDetailActions book={book} />
      </BookStickyContainer>
      <BookDetailInformation book={book} />
      <BookDetailFooter book={book} />
    </Layout>
  );
}

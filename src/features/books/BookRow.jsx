import Table from "../../ui/Table";
import Column from "../../ui/Column";
import { TbPackageImport } from "react-icons/tb";
import { TbPackageExport } from "react-icons/tb";
import IconAndTextContainer from "../../ui/IconAndTextContainer";
import BookRowActions from "./BookRowActions";

function BookRow({ book = {} }) {
  return (
    <Table.Row>
      <Column.Thumbnail src={book.image} />
      <Column.Name>
        ({book.publishedYear}) {book.name}
      </Column.Name>
      <Column>{book.category.name}</Column>
      <Column.VStacked>
        <IconAndTextContainer>
          <span className="sr-only">Gía mua vào</span>
          <TbPackageImport size={24} role="presentation" />
          <Column.Price>{book.purchasePrice}</Column.Price>
        </IconAndTextContainer>
        <IconAndTextContainer>
          <span className="sr-only">Gía bán ra</span>
          <TbPackageExport size={24} role="presentation" />
          <Column.Price>{book.sellingPrice}</Column.Price>
        </IconAndTextContainer>
      </Column.VStacked>
      <Column>{book.author}</Column>

      <BookRowActions book={book} />
    </Table.Row>
  );
}

export default BookRow;

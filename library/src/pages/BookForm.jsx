import { Link } from "react-router-dom";
import Header from "../components/Header";

function BookForm() {
    return (
        <>
            <h2>도서 등록</h2>
            <input placeholder="도서 제목" />
            <input placeholder="작성자" />
            <textarea placeholder="도서 내용" />
            <button>등록하기</button>
            <Link to='/'>메인으로 돌아가기</Link>
        </>
    );
}

export default BookForm;
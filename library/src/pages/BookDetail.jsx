import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";

function BookDetail() {
    const {id} = useParams();

    return (
        <>
            <h2>도서 상세페이지</h2>
            <p>현재 선택한 도서 ID: {id}</p>
            <Link to='/'>메인으로 돌아가기</Link>
        </>
    );
}

export default BookDetail;
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <Link to='/books/new'>
                <button>도서 등록</button>
            </Link>

            <h2>도서 목록</h2>
            <Link to='/books/1'>별빛</Link>
            <br />
            <Link to='/books/2'>달빛</Link>
            <br />
            <Link to='/books/3'>햇빛</Link>
        </>
    );
}

export default Home;
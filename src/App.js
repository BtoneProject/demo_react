import logo from './logo.svg';
import './App.css';

function Header() {
    return (
        <div className="home-header">
            <div className="home-title">
                <h1><a href="/">DeveloperBoard</a></h1>
            </div>
            <div className="user-info">
                <span>로그인</span>
            </div>
        </div>
    );
}

// function Card(props) {
//     const boardList = [];
//
//     for(let i=0; i<props.topics.length; i++) {
//         let t = props.topics[i];
//
//         // Each child in a list should have a unique "key" prop.
//         // lis.push(<li><a href={'/read/' + t.id}>{t.title}</a></li>)
//         boardList.push(
//             <div key={t.id} className="card" style={{width: '18rem'}}>
//                 <img
//                     src="https://velog.velcdn.com/images/hbin12212/post/48fa9aa4-90f8-4225-a7cc-0f4dc50df5c8/image.png"
//                     className="card-img-top" alt="..."/>
//                 <div className="card-body">
//                     <h5 className="card-title">자바스크립트</h5>
//                     <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
//                     <p className="card-text">Some quick example text to build on the card title and make up the bulk
//                         of the
//                         card's content.</p>
//                     <a href="#" className="card-link">Card link</a>
//                     <a href="#" className="card-link">Another link</a>
//                 </div>
//             </div>
//         )
//     }
//
//     return (
//         <nav>
//             <ol>
//                 {boardList}
//             </ol>
//         </nav>
//     );
// }

function App() {
    return (
        <div className="App">
            <Header></Header>
            <div className="card-area">
                <div className="card" style={{width: '18rem'}}>
                    <img
                        src="https://velog.velcdn.com/images/hbin12212/post/48fa9aa4-90f8-4225-a7cc-0f4dc50df5c8/image.png"
                        className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">자바스크립트</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                            of the
                            card's content.</p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>

                <div className="card" style={{width: '18rem'}}>
                    <img
                        src="https://velog.velcdn.com/images/seungchan__y/post/b8f4b722-84d8-4b82-b0f8-6049141b6118/image.png"
                        className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                            of the
                            card's content.</p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>

                <div className="card" style={{width: '18rem'}}>
                    <img
                        src="https://imgnews.pstatic.net/image/477/2023/05/16/0000428723_001_20230516055701903.jpg?type=w647"
                        className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                            of the
                            card's content.</p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>

                <div className="card" style={{width: '18rem'}}>
                    <img
                        src="https://velog.velcdn.com/images/seewon/post/5a18581d-5dd7-4c6c-bbd6-496ef6e86e80/image.jpg"
                        className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                            of the
                            card's content.</p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>

                <div className="card" style={{width: '18rem'}}>
                    <img
                        src="https://velog.velcdn.com/images/designc/post/edcb6480-d8b8-4010-b70e-8ce91538a3a9/image.gif"
                        className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                            of the
                            card's content.</p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

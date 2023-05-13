import '../styles/Blog/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Blog = (props) => {
    
    return (
        <div>
            <h1 className='blogName'>БЛОГ на React</h1>
            <div className='blog-container'>
                <main className='forms'>
                    <h2>Пост 1</h2>
                    <h3>Название поста</h3>
                    <p>Описание поста</p>
                </main>
                <form className='add-post'>
                    <aside className='form'>
                        <h2>Добавить пост</h2>
                        <input placeholder='Название поста'></input>
                        <input placeholder='Описание поста'></input>
                        <button className='btn-blog'>Добавить</button>
                    </aside>
                </form>
            </div>
    </div>);
}
 
export default Blog;
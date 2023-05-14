import '../styles/Blog/style.css'

const Blog = (props) => {

    return (
        <>
            <h2>Список пользователей</h2>
            <div className='container'>
                <main className='user-list'>
                    <h3>Александр Марков</h3>
                    <p>роль: Администратор</p>
                    <p>краткая информация</p>
                </main>
                <aside className='form-info'>
                    <h3>Александр Марков</h3>
                    <p>роль: Администратор</p>
                    <p>краткая информация</p>
                </aside>
            </div>
        </>);
}

export default Blog;
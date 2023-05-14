import '../styles/Home/style.css'
import ButtonForm from '../components/BtnForm/ButtonForm'

const Home = () => {

    return (
        <main className="section-main">
            <div className="container-main">

                <h3 className='section-title'>
                    Hi, my name is Sanya! <br />
                    <span className='section-subtitle'>I'm a frontend developer</span>
                </h3>

                <p className='container-description'>with passion for learning and creating</p>

                <ButtonForm btnText={'START NOW'} link={'/registration'} />

            </div>
        </main>
    );
}

export default Home;
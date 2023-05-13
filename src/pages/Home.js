import '../styles/Home/style.css'
import ButtonForm from '../components/BtnForm/ButtonForm'

const Home = () => {

    return (
        <main className="section-main">
            <div className="container-main">
                
                <span className='container-span'>
                    <h1>Hi, my name is Sanya!</h1>
                    <h2>a frontend developer</h2>
                    <p>with passion for learning and creating.</p>
                </span>
                
                <ButtonForm btnText={'START NOW'}x/>
            </div>
        </main>
     );
}
 
export default Home;
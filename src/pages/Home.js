import '../pages/Pages.css'
import Block from '../components/Block';
function Home(){
    return(
        <div>
            <div className='body'>
                <div className='title'>
                    <h1>Web<span>PM</span></h1>
                </div>
            </div>
            <div className='container'>
               <Block />
            </div>
        </div>
        
    );
}


export default Home;
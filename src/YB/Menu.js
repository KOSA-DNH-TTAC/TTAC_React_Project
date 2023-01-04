import NoBrandBurger from './NoBrandBurger.json';
import YBNavi from './YBNavi';

function Menu() {

    return (
        <>
        <YBNavi />

            <div className='container'>
                <div className='row'>
                 
                    {NoBrandBurger.map((item, index) => {

                        return <>

                            <div className='col-md-4'>
                                <img src={item.img} className='img-fluid' />
                                <h4>{item.name}</h4>
                                <h5>{item.eng_name}</h5>
                                <h6>{item.desc}</h6>
                            </div>
                        </>

                    })
                    }
                </div>
            </div>
        </>
    )
}

export default Menu;
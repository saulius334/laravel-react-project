import '../../sass/square.scss';

function RedSquare({color}) {
    return (
        <>
        <div className='square'
         style={{
            backgroundColor: color
            }}></div>
        </>
    )
}

export default RedSquare;
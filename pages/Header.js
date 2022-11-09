import config from '../config.json'
import styled from "styled-components"


//utilizando o styled component para configurar direto no arquivo do componente

const StyledHeader = styled.div`
img{
    width:80px;
    height:80px;
    border-radius:50%
}
.user-info{
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
}
`

const StyledBanner = styled.div`
    /* background-color: blue; */
    background-image:url(${config.bg});
    /* background-repeat:no-repeat; */
    background-position:center;
    height: 230px;
`

function Header() {
    return (
        <StyledHeader>
            <StyledBanner />
            <section className='user-info'>
                <img src={`https://github.com/${config.github}.png`}></img>
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
            {/* <img src='banner' /> */}
        </StyledHeader>
    )
};

export default Header;
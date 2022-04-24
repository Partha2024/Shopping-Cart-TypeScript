import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    border: 1px solid lightblue;
    border-radius: 20px;
    height: 100%;

    .imageDiv{

        top: 50%;
        text-align: center;
        height: 250px;
    }

    img{
        max-height : 250px;
        width: 200px;
        object-fit : fit;
        border-radius : 20px 20px 0 0;
    }

    div{
        font-family : Arial, Helvetica, sans-serif;
        padding: 1rem;
    }

    .infoDiv{
        height: 300px;
    }

    .infoDiv p{
        color : gray;
        font-size : 15px;
    }

    .priceDiv{
        margin-top : -20px;
        margin-bottom : 20px;
        height : 20px;
    }

    button{
        background-color: #BEC0C0;
        border-radius: 0 0 20px 20px;
        border: none;
        height: 40px;
    }

`;
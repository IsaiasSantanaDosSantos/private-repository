import { styled } from "styled-components";
import * as colors from "../../config/colors"

export const WindowsContainer = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
background-color: ${colors.transpDarkColor};
.windowsContainer {
    max-width: 700px;
    width: 95%;
    margin: 0 auto;
    background-color: ${colors.whiteColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
    box-shadow: 0px 0px 41px -16px ${colors.blackColor};
}
h1 {
    font-size: 30px;
    font-weight: 700;
    text-align: center;
}
p {
    font-size: 16px;
    text-align: center;
}
.gifBox {
    max-width: 164px;
    width: 100%;
    height: 164px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 20px;
    overflow: hidden;
    position: relative;
    border-radius: 50%;
    box-shadow: 0px 0px 41px -16px ${colors.blackColor};
    margin: 15px auto;
}
.gitHibGif {
    height: 350px;
}
.gifBoxBar {
    position: absolute;
    top: 79px;
    left: 0;
    height: 7px;
    width: 100%;
    transform: rotate(-45deg);
    background-color: ${colors.errorColor};
}
.imageBox {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    column-gap: 20px;
    row-gap: 20px;
    position: relative;
    margin-top: 15px;
}
.logoImage {
    width: 60px;
    background-color: ${colors.whiteColor};
    padding: 0 6px;
}
a {
    font-size: 16px;
    color: ${colors.blackColor};
    font-weight: 500;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transition: all 0.5s;
    border-radius: 10px;
}
a:hover {
    transform: scale(1.08);
}
a:active {
    text-decoration: underline;
}
.imageBoxBar {
    position: absolute;
    width: 100%;
    height: 3px;
    left: 0;
    top: 35%;
    background-color: ${colors.darkGrayColor};
    z-index: 0;
    border-radius: 5px;
}
@media (max-width: 576px){
    .gifBox {
    width: 100%;
}
}
`;
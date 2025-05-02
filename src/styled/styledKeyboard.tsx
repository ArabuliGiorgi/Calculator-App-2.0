import styled from "styled-components";

const Keyboard = styled.div<{darkmode: string}>`
    width: 100%;
    padding: 32px 43px;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: space-between;
    background-color: ${(props) => props.darkmode === "true" ? '#27292E' : '#F5F5F5'};

    .key{
        width: 64px;
        height: 64px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 32px;
        margin-top: 16px;

        h1{
            font-weight: 400;
            font-size: 24px;
            line-height: 36px;
            letter-spacing: 0px;
            text-align: center;
            color: ${(props) => props.darkmode === "true" ? '#FFFFFF' : '#1E1E1E'};
        }
    }
    .result{
        width: 64px;
        height: 144px;
        border-radius: 32px;
        grid-column: 4/5;
        grid-row: 4/6;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 16px;
        background: linear-gradient(180deg, #ED0E98 0%, #FE5A2D 100%);
        box-shadow: 0px 8px 24px 2px #F73C5766;

        h1{
            font-weight: 400;
            font-size: 24px;
            line-height: 36px;
            letter-spacing: 0px;
            text-align: center;
            color: #FFFFFF;
        }
    }
    .AC h1{
        background: linear-gradient(180deg, #ED0E98 0%, #FE5A2D 100%);
        color: transparent;
        background-clip: text;
    }
    .bigger{
        font-size: 36px !important;
    }

    .theme-changer{
        border: 2px solid ${(props) => props.darkmode === "true" ? '#38343C' : '#F0ECEC'};
    }
    .operation{
        background-color: ${(props) => props.darkmode === "true" ? '#38343C' : '#F0ECEC'};
    }
`

export {Keyboard}
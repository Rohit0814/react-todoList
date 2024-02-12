import style from './layout.module.css';

const LayoutComponent =(props) =>{
    return <>
        <div className={style['layout']}>
            {props.children}
        </div>
    </>
}

export default LayoutComponent
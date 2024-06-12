function MsgBox({userName,textColor}){
    let styles= {color: textColor};
    return(
        <div>
            <h2 style={styles}> Hello,{userName}</h2>
    
        </div>
    );
}
export default MsgBox;
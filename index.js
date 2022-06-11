// code your solution here

superbowlWin = (array) => {
    const win = array.find( array=> array.result === "W" );
    return !!win ? win.year : undefined;
  }


////function superbowlWin(win){
    //function win(array){
      //  return array.find(result==="W");

    //}
//}

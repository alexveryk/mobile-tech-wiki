import style from "../PhoneCard/PhoneCard.module.css";
import image from "../../assets/sams21.jpg";
import { Headers } from "../shared/Headers";
export const PhoneCard = () => {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       accept: 'application/json',
  //       'Accept-Encoding': 'gzip, deflate',
  //       Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImN1c19RWURoMDlISFlBbU9aeCIsIm1vZXNpZlByaWNpbmdJZCI6InByaWNlXzFNUXF5dkJESWxQbVVQcE1SWUVWdnlLZSIsImlhdCI6MTcyMjA3Mzc3MX0.swNPmZtGrlYI_4v_DKLYWCXa-eQmzO_KayY8tVEofec'
  //     }
  //   };

  //   async function fetchData() {
  //     try {
  //       const response = await fetch('https://api.techspecs.io/v4/product/detail?productId=63e96260ff7af4b68a304280&keepCasing=true', options);
  //       const data = await response.json();
  //       return data;
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   async function main() {
  //     const responseData = await fetchData();
  //     console.log(responseData);
  // }

  // main()

  return (
    // <div className={style.phoneCard}>
    //   <div className={style.PhoneCardImg}><img src={image} alt="s21" /></div>
    //   <div className={style.characteristics}>
    //     <div className={style.title}>
    //       <span  className={style.PhoneCardName}>Назва</span>
    //       <span>Samsung S21 5G</span>
    //     </div>
    //     <div className={style.title}>
    //       <span  className={style.PhoneCardName}>Єкран</span>
    //       <span>6.5'</span>
    //     </div>
    //     <div className={style.title}>
    //       <span  className={style.PhoneCardName}>Камера</span>
    //       <span>50мп+8мп</span>
    //     </div>
    //     <div className={style.title}>
    //       <span  className={style.PhoneCardName}>Пам'ять</span>
    //       <span>256ГБ</span>
    //     </div>
    //     <div className={style.title}>
    //       <span className={style.PhoneCardName}>Процесор</span>
    //       <span></span>
    //     </div>
    //     <div className={style.title}>
    //       <span className={style.PhoneCardName}>Ціна</span>
    //       <span>23999</span>
    //     </div>

    //   </div>
    // </div>
    <div className={style.card}>
      <div className={style.phoneName}>
        <Headers size={2} title={"Samsung S21 5G"} />
      </div>
      <div className={style.haracteristic}>
        <div>
          <img src={image} alt="Samsung s21" />
        </div>
        <div>
          <ul>
            <li>Screen</li>
            <li>Processor</li>
            <li>Memory</li>
            <li>Battery</li>
          </ul>
        </div>
      </div>
      <div className={style.price}>
        <h3>
          Price <span>24999</span> грн.
        </h3>
      </div>
    </div>
  );
};

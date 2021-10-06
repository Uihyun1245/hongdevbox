import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./scss/main_cueat.module.scss";
const MainCueat = () => {
  const cueatImgList = () => {
    const imgList = [];
    for (let i = 0; i < 5; i++) {
      imgList.push(
        <SwiperSlide key={`cueat-slide${i}`} className={styles["cueat-slide"]}>
          <img
            src={`/images/pandac/main/cueat_img${i + 1}.png`}
            alt="cueat main image"
          />
        </SwiperSlide>
      );
    }
    return imgList;
  };

  return (
    <section className={styles["cueat-section"]}>
      <div className={styles["cueat-title"]}>
        <h2>왜 사과는 한 개씩 팔지 않을까?</h2>
        <img src="/images/pandac/main/apple.png" alt="사과" />
      </div>
      <div className={styles["cueat-body"]}>
        <div className={styles["body-title"]}>
          <img src="/images/pandac/main/cueat_logo.png" alt="큐잇로고" />
          <h2>큐잇</h2>
          <strong>고객 라이프스타일 큐레이션 정기배송 서비스</strong>
        </div>
        <div className={styles["body-content"]}>
          <div className={styles["content-text"]}>
            <div className={styles["text-box"]}>
              <h3>고품질</h3>
              <div className={styles["boxText-group"]}>
                <p>큐잇은 특ㆍ상품만으로 상품을 구성합니다.</p>
                <p>큐잇은 비파괴 당도선별기를 통한 2차 선별을 합니다.</p>
                <p>큐잇은 자체품질관리 기준을 통과한 산지만 계약합니다.</p>
              </div>
            </div>
            <div className={styles["text-box"]}>
              <h3>맞춤소비</h3>
              <div className={styles["boxText-group"]}>
                <p>큐잇은 소비량에 맞게 소분하여 배송합니다.</p>
                <p>큐잇은 소비량 데이터에 따른 용량을 메뉴얼화 합니다.</p>
                <p>큐잇은 최소주문수량이 아닌 최소주문스펙 시스템입니다.</p>
              </div>
            </div>
            <div className={styles["text-box"]}>
              <h3>새로운 품종</h3>
              <div className={styles["boxText-group"]}>
                <p>큐잇은 지역특산 및 제철 농산물을 제공합니다.</p>
                <p>큐잇은 신규 종자, 수확 정보에 따라 신품중을 제공합니다.</p>
                <p>큐잇은 수입상을 통해 희귀품종 수입 농산물을 제공합니다.</p>
              </div>
            </div>
            <div className={styles["linkBtn"]}>
              <a href="https://www.cueat.kr/web/main" target="_blank">
                큐잇 바로가기
              </a>
            </div>
          </div>
          <div className={styles["content-img"]}>
            <Swiper
              className={styles["cueat-swiper"]}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              effect={"fade"}
              loop={true}
              slidesPerView={1}
              resistanceRatio={0}
              // spaceBetween={50}
              // onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
            >
              {cueatImgList()}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCueat;

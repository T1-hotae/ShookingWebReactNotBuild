import Card from "./Card";

const CardInfoInput = () => {
  return (
    <div>
      <section>
        <Card />
      </section>
      <section>
        <p>카드 번호</p>
        <input type="text" />
      </section>
      <section>
        <p>만료일</p>
        <input type="text" placeholder="MM / YY" />
      </section>
      <section>
        <p>카드 소유자 이름</p>
        <input
          type="text"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        />
      </section>
      <section>
        <p>보안코드(CVC/CVV)</p>
        <input type="text" />
      </section>
      <section></section>
    </div>
  );
};

export default CardInfoInput;

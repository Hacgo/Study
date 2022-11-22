const { DataTypes } = require('sequelize'); // 시퀄라이즈 불러오기

module.exports = (sequelize) => { // 화살표 함수를 외부로 익수폴트
  return sequelize.define(
    // 매개변수 1 : 모델이름(글로발스태이트)
    'GlobalStat',

    // 매개변수 2 : 항목들
    {
      id: {
        autoIncrement: true,              // 값 자동증가
        type: DataTypes.INTEGER.UNSIGNED, // 양의 정수
        allowNull: false,                 // Null값 허용 X
        primaryKey: true,                 // 프라이머리키로 사용
      },
      cc: {             // 국가코드(country code의 약자)
        type: DataTypes.CHAR(2),
        allowNull: false,
      },
      date: {           // 날짜
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      confirmed: {      // 확진자 수
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      death: {          // 사망자 수
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      released: {       // 완치자 인원
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      tested: {         // 총 검사자 인원
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      testing: {        // 검사중인 인원
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      negative: {       // 음성 인원
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },

    // 매개변수 추가 옵션
    {
      sequelize,                // 시퀄라이즈 인스턴스
      tableName: 'GlobalStat',  // 데이터베이스에서 테이블의 이름
      timestamps: false,        // 테이블 인덱스
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          fields: [{ name: 'id' }],
        },
        {
          name: 'ccWithDate',
          unique: true,
          fields: [{ name: 'cc' }, { name: 'date' }],
        },
      ],
      timestaps: false,         // 타임스탬프 속성 자동 생성 X
    },
  );
};

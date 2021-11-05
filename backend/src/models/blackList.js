import _sequelize from "sequelize";
const { Model } = _sequelize;

export default class tbBlackList extends Model {
  static init(sequelize, DataTypes) {
    super.init(
      {
        id_blacklist: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        nm_person: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        ds_reason: {
          type: DataTypes.STRING(200),
        },
        ds_place: {
          type: DataTypes.STRING(100),
        },
        dt_occurred: {
          type: DataTypes.DATE,
        },
        dt_included: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        dt_lastUpdate: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "tb_blacklist",
        timestamps: false,
      }
    );
    return tbBlackList;
  }
}

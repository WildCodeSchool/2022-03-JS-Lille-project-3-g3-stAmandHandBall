const AbstractManager = require("./AbstractManager");

class NewsAndTeamManager extends AbstractManager {
  static table = "newsAndTeam";

  findAll() {
    return this.connection.query(
      `SELECT n.id, n.publishedAt, n.title, n.subtitle, n.content, n.content, n.img1, t.id, t.title, t.division FROM news AS n LEFT JOIN team AS t ON t.id=n.team_id;`
    );
  }
}

module.exports = NewsAndTeamManager;

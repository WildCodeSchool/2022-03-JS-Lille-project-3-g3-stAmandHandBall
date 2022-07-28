const AbstractManager = require("./AbstractManager");

class NewsManager extends AbstractManager {
  static table = "news";

  insert(news) {
    return this.connection.query(
      `insert into ${NewsManager.table} (publishedAt, title, sub-title, content, img1, img2, img3, img4, img5, img6) values (?,?,?,?,?,?,?,?,?,?)`,
      [
        news.publishedAt,
        news.title,
        news.subTitle,
        news.content,
        news.img1,
        news.img2,
        news.img3,
        news.img4,
        news.img5,
        news.img6,
      ]
    );
  }

  update(news) {
    return this.connection.query(
      `update ${NewsManager.table} set publishedAt = ?, title = ?, subTitle = ?, content = ?, img1 = ?, img2 = ?, img3 = ?, img4 = ?, img5 = ?, img6 = ? where id = ?`,
      [
        news.publishedAt,
        news.title,
        news.subTitle,
        news.content,
        news.img1,
        news.img2,
        news.img3,
        news.img4,
        news.img5,
        news.img6,
        news.id,
      ]
    );
  }

  findAll() {
    return this.connection.query(
      `SELECT * FROM news ORDER BY publishedAt DESC;`
    );
  }
}

module.exports = NewsManager;

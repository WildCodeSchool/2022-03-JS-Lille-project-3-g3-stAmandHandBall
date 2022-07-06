const AbstractManager = require("./AbstractManager");

class NewsManager extends AbstractManager {
  static table = "news";

  insert(news) {
    return this.connection.query(
      `insert into ${NewsManager.table} (publishedAt, title, sub-title, content, img) values (?,?,?,?,?)`,
      [news.publishedAt, news.title, news.subTitle, news.content, news.img]
    );
  }

  update(news) {
    return this.connection.query(
      `update ${NewsManager.table} set publishedAt = ?, title = ?, subTitle = ?, content = ?, img = ? where id = ?`,
      [
        news.publishedAt,
        news.title,
        news.subTitle,
        news.content,
        news.img,
        news.id,
      ]
    );
  }
}

module.exports = NewsManager;

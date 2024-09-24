import fs from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "data");
const filePath = path.join(dataDir, "blog.json");

const parseDataFromJson = () => {
  const jsonStr = fs.readFileSync(filePath, "utf8");
  return JSON.parse(jsonStr);
};

export function getAllArticles() {
  const data = parseDataFromJson();
  return data;
}

export function getAllBlogIds() {
  const data = parseDataFromJson();
  return data.map(({ id }) => ({ params: { id: id.toString() } }));
}

export function getArticle(id) {
  const data = parseDataFromJson();
  const article = data.filter(blog => blog.id.toString() === id);
  if (article.length) {
    return article[0];
  } else {
    return {};
  }
}

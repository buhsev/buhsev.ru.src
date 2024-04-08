import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const doclistStyles = {
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

//const docLinks = [
  //{
    //text: "TypeScript Documentation",
    //url: "https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/",
    //color: "#8954A8",
  //},
  //{
    //text: "GraphQL Typegen Documentation",
    //url: "https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/",
    //color: "#8954A8",
  //}
//]

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

//const links = [
  //{
    //text: "Tutorial",
    //url: "https://www.gatsbyjs.com/docs/tutorial/getting-started/",
    //description:
      //"A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    //color: "#E95800",
  //},
  //{
    //text: "How to Guides",
    //url: "https://www.gatsbyjs.com/docs/how-to/",
    //description:
      //"Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    //color: "#1099A8",
  //},
  //{
    //text: "Reference Guides",
    //url: "https://www.gatsbyjs.com/docs/reference/",
    //description:
      //"Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    //color: "#BC027F",
  //},
  //{
    //text: "Conceptual Guides",
    //url: "https://www.gatsbyjs.com/docs/conceptual/",
    //description:
      //"Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    //color: "#0D96F2",
  //},
  //{
    //text: "Plugin Library",
    //url: "https://www.gatsbyjs.com/plugins",
    //description:
      //"Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    //color: "#8EB814",
  //},
  //{
    //text: "Build and Host",
    //url: "https://www.gatsbyjs.com/cloud",
    //badge: true,
    //description:
      //"Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    //color: "#663399",
  //},
//]

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        бухгалтерские аудиторские услуги
      </h1>
      <div>
        <p>
        Профессиональный бухалер с большим стажем.
        Веду буxгалтeрию на УСН, пaтенте, НДC
        Пoмoгу в вoпpoсах c налогaми, докумeнтами, отчeтaми
        </p>

        <p>
        💥Рaбoтaю качеcтвeннo, быстpо, на связи до кoнeчнoгo pезультaтa
        </p>

        <p>
        ❗Первичнaя консультация - бесплатно!
        </p>

        <p>
        <ul>
            <li>
                Тружусь на прибыль вашего бизнеса,
            </li>
            <li>
                Создаю комфортные условия для работы, со мной легко общаться;
            </li>
            <li>
                Экономлю ваше время, деньги и нервы.
            </li>
            <li>
                Стараюсь оптимизировать расходы, операционку и документооборот
            </li>
        </ul>

        </p>

        <p>
                <ul>
                Помогу в решении следующих задач:
                    <li>
                        ✔ Сдам отчеты в ФНС, ФСС, СФР, Росстат.
                    </li>
                    <li>
                        ✔ Посчитаю налоги.
                    </li>
                    <li>
                        ✔ Подготовлю ответ на требование ФНС
                    </li>
                    <li>
                        ✔ Восстановлю учет за прошлые периоды (скидка 50%, при дальнейшем сотрудничестве)
                    </li>
                    <li>
                        ✔ Веду бухучет в ООО.
                    </li>
                </ul>
        Рад ответить на все Ваши вопросы, обращайтесь!
        Также работаю с новыми регионами!!!
        </p>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

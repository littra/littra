import "./AnimatedCard.css";
import $ from "jquery";

function AnimatedCard() {
  $(".option").click(function () {
    $(".option").removeClass("active");
    $(this).addClass("active");
  });
  return (
    <div>
      <div className="options">
        <div
          className="option"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1440&q=80")`,
          }}
        >
          <div className="shadow"></div>
          <div className="label">
            <div className="icon">
              <i className="fas fa-walking"></i>
            </div>
            <div className="info">
              <div className="title"> dgdt </div>
              <div className="sub">Omuke trughte a otufta</div>
            </div>
          </div>
        </div>
        <div
          className="option"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1482192505345-5655af888cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80")`,
          }}
        >
          <div className="shadow"></div>
          <div className="label">
            <div className="icon">
              <i className="fas fa-snowflake"></i>
            </div>
            <div className="info">
              <div className="title">Oretemauw</div>
              <div className="sub">Omuke trough a otufta</div>
            </div>
          </div>
        </div>
        <div
          className="option active"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1442850473887-0fb77cd0b337?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")`,
          }}
        >
          <div className="shadow"></div>
          <div className="label">
            <div className="icon">
              <i className="fas fa-tree"></i>
            </div>
            <div className="info">
              <div className="title">Iteresusele</div>
              <div className="sub">Omuke trughte a otufta</div>
            </div>
          </div>
        </div>
        <div
          className="option"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80")`,
          }}
        >
          <div className="shadow"></div>
          <div className="label">
            <div className="icon">
              <i className="fas fa-tint"></i>
            </div>
            <div className="info">
              <div className="title">Idiefe</div>
              <div className="sub">Omuke trughte a otufta</div>
            </div>
          </div>
        </div>
        <div
          className="option"
          style={{
            backgroundImage: `url("https://images.unsplash.com/38/L2NfDz5SOm7Gbf755qpw_DSCF0490.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")`,
          }}
        >
          <div className="shadow"></div>
          <div className="label">
            <div className="icon">
              <i className="fas fa-sun"></i>
            </div>
            <div className="info">
              <div className="title">Inatethi</div>
              <div className="sub">Omuke trughte a tufta</div>
            </div>
          </div>
        </div>
      </div>

      <link
        rel="stylesheet"
        href="https://static.fontawesome.com/css/fontawesome-app.css"
      />
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.2.0/css/all.css"
      />
    </div>
  );
}

export default AnimatedCard;

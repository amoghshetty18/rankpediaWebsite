import React from "react";
import ImageLeft from "../../components/ImageLeft";

function WhyJoin() {
  return (
    <div class="new-bg">
      <ImageLeft
        imgPos={"left"}
        title={"Who should join us?"}
        paragraph={
          "Children who want to enhance their learning in any stream and homeschoolers looking for structured and systematic learning platforms."
        }
        imgUrl="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643626537/e-school/Who-shuld-join-us_uvtoom.png"
      >
        <ul>
          <li>
            Children who want professional training in music, arts, sports, etc,
            and require flexibility in learning hours.
          </li>
          <li>
            Those who can't attend physical classes because of medical
            treatments.
          </li>
          <li>
            Those children whose parents are having transferrable jobs and
            frequently have to change their location as well as their schools.
          </li>
          <li>Children who wish to take up additional tuition classes.</li>
          <li>
            Children who are not satisfied with the traditional methods of
            teaching and the higher fees structures.
          </li>
        </ul>
      </ImageLeft>

      <ImageLeft
      imgPos={"right"}
      title={"Our Teachers"}
      paragraph={"Our teachers are highly qualified and go through a variety of internal training to ensure that they provide the best education possible."}
      imgUrl="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643626489/e-school/Our_teachers-png_uu6khn.png"
      >
        <ul>
            <li>
            Our E-school teachers will be from all over the world and are trained enthusiastically with the Cambridge and American Curriculum which gives students exposure to international standards of learning.
            </li>
            <li>
            Teachers establish a learning environment that encourages students to engage in active and extensive participation. 
            </li>
        </ul>
      </ImageLeft>

      <ImageLeft
        imgPos={"left"}
        title={"Parents as Co-teachers "}
        paragraph={"Parents act as co-teachers to contribute to their child’s academic development reviving the Indian value system of education."}
        imgUrl="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643626519/e-school/Parents_as_co_teachers_wbgsbx.png"
      >
          <ul>
              <li>Rankpedia incorporates Parents and Grandparents in a child's learning process because we recognize the importance of elders' words and how they are imprinted in children's minds. </li>
          </ul>
    </ImageLeft>
    </div>
  );
}

export default WhyJoin;

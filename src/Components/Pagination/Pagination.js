import "bulma/css/bulma.min.css";
export default function Pagination({ productList }) {
  //let pagination = document.querySelector('.numbers');
  let pages = Math.ceil(productList.length / 10);
  let template = "";
  let currentPage = 1;

  //Creation of pages
  for (let i = 0; i < pages; i++) {
    if (i == 0) {
      template =
        template +
        `
        <a href="#" aria-current="page"
        class="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
        1 </a>
        `;
    } else {
      template =
        template +
        `
            <a href="#"
            class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
            ${i + 1} </a>
        `;
    }
  }

  pagination.innerHTML = template;

  //Click Number
  let numbers = document.querySelector(".numbers");

  for (let i = 0; i < numbers.children.length; i++) {
    let page = numbers.children[i];

    page.addEventListener("click", () => {
      currentPage = i + 1;
      active();
      page.style.borderColor = "#6366F1";
      page.style.color = "#6366F1";
      page.style.background = "#EEF2FF";

      modelsPage = getModelsPages();
      portraitsImg(modelsPage[parseInt(page.innerText) - 1]);
    });
  }

  //Next
  next = document.querySelectorAll(".next");
  for (let i = 0; i < next.length; i++) {
    const element = next[i];

    element.addEventListener("click", () => {
      if (pages >= currentPage + 1) {
        active();
        let page = document.querySelector(".numbers").children[currentPage];

        page.style.borderColor = "#6366F1";
        page.style.color = "#6366F1";
        page.style.background = "#EEF2FF";

        modelsPage = getModelsPages();
        portraitsImg(modelsPage[parseInt(page.innerText) - 1]);
        currentPage = currentPage + 1;
      }
    });
  }

  //Back
  back = document.querySelectorAll(".back");
  for (let i = 0; i < back.length; i++) {
    let element = back[i];

    element.addEventListener("click", () => {
      if (currentPage - 1 > 0) {
        currentPage = currentPage - 1;
        active();
        let page = document.querySelector(".numbers").children[currentPage - 1];

        page.style.borderColor = "#6366F1";
        page.style.color = "#6366F1";
        page.style.background = "#EEF2FF";

        modelsPage = getModelsPages();
        portraitsImg(modelsPage[parseInt(page.innerText) - 1]);
      }
    });
  }
  return (
    <>
      <div className="">
        <div class="">
          <div class="">
            <a href="#" class="">
              Previous{" "}
            </a>
            <a href="#" class="">
              Next{" "}
            </a>
          </div>
          <div class="">
            <div>
              <nav class="" aria-label="Pagination">
                <a href="#" class="">
                  <span class="sr-only">Previous</span>
                  <svg
                    class=""
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
                <div class="numbers">
                  <a
                    href="#"
                    aria-current="page"
                    class="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  >
                    1{" "}
                  </a>
                </div>

                <a
                  href="#"
                  class="next relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span class="sr-only">Next</span>
                  <svg
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

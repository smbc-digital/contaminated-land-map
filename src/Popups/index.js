const Locally_listed_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Locally Listed Building</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Name: ${feature.properties.name}</p>
    <p>Type: ${feature.properties.type}</p>
    <p>Committee: ${feature.properties.committee}</p>
    <p>Ward: ${feature.properties.ward}</p>
    <a href="${feature.properties.web_db_link}" target="_blank">Further Information</a>
    </div></div>`
  layer.bindPopup(content)
}

const Statutory_listed_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Statutory Listed Building</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Name: ${feature.properties.name}</p>
    <p>Type: ${feature.properties.type}</p>
    <p>Grade: ${feature.properties.grade}</p>
    <p>Committee: ${feature.properties.committee}</p>
    <p>Ward: ${feature.properties.ward}</p>
    <a href="${feature.properties.web_db_link}" target="_blank"> Further Information</a>
    </div></div>`
  layer.bindPopup(content)
}

const Conservation_area_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-tag smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Conservation Area</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Name: ${feature.properties.cons_area}</p>
    <a href="${feature.properties.web_info_link}" target="_blank">Further Information</a>
    </div></div>`
  layer.bindPopup(content)
}

const Article4_1_direction_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Article 4-1 Direction</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Name: ${feature.properties.conservation_area}</p>
    <p>Type: ${feature.properties.type}</p>
    <a href="${feature.properties.web_db_link}" target="_blank">Further Information</a>
    </div></div>`
  layer.bindPopup(content)
}

const Article4_2_direction_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Article 4-2 Direction</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Name: ${feature.properties.conservation_area}</p>
    <p>Type: ${feature.properties.type}</p>
    <a href="${feature.properties.web_db_link}" target="_blank">Further Information</a>
    </div></div>`
  layer.bindPopup(content)
}

const Scheduled_monument_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-university smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Scheduled Monument</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Name: ${feature.properties.name}</p>
    <p>National Monument No: ${feature.properties.national_monument_no}</p>
    <p>${feature.properties.web_db_link}</p>
    </div></div>`
  layer.bindPopup(content)
}

const Historic_Parks_Gardens_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-tree smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Registered Historic Park or Garden</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Name: ${feature.properties.site}</p>
    <p>${feature.properties.web_db_link}</p>
    </div></div>`
  layer.bindPopup(content)
}

export {
  Locally_listed_Popup,
  Statutory_listed_Popup,
  Conservation_area_Popup,
  Article4_1_direction_Popup,
  Article4_2_direction_Popup,
  Scheduled_monument_Popup,
  Historic_Parks_Gardens_Popup
}
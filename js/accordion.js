var accordions = document.querySelectorAll('div.section.accordions')
accordions.forEach(accordion => {
  accordionWrapper = document.createElement("div")
  accordionWrapper.setAttribute("class", "accordion")
  accordionWrapper.setAttribute("id", "accordion-wrapper")
  
  var items = accordion.querySelectorAll("div.section.accordion")
  items.forEach((item, idx) => {
    const accordionID = item.id
    const accordionTitle = item.querySelector("h2, h3, h4, h5")
    const accordionContent = item.querySelectorAll("div.section.accordion > :not(:first-child)")
    
    var itemWrapper = document.createElement("div")
    itemWrapper.setAttribute("class", "accordion-item")
  
    var titleWrapper = document.createElement("h3")
    titleWrapper.setAttribute("class", "accordion-header")
    titleWrapper.setAttribute("id", `heading-${accordionID}`)
    
    var titleBtn = document.createElement("button")
    titleBtn.setAttribute("class", "accordion-button")
    titleBtn.setAttribute("type", "button")
    titleBtn.setAttribute("data-bs-toggle", "collapse")
    titleBtn.setAttribute("data-bs-target", `#collapse-${accordionID}`)
    titleBtn.setAttribute("aria-expanded", `${idx === 0 ? "true" : "false"}`)
    titleBtn.setAttribute("area-controls", `#collapse-${accordionID}`)
    titleBtn.appendChild(accordionTitle)
    titleWrapper.append(titleBtn)
    
    
    var contentOuterWrapper = document.createElement("div")
    contentOuterWrapper.setAttribute("class",`accordion-collapse collapse ${idx === 0 ? "show" : "hide"}`)
    contentOuterWrapper.setAttribute("id", `collapse-${accordionID}`)
    contentOuterWrapper.setAttribute("aria-labelledby",`heading-${accordionID}`)
    contentOuterWrapper.setAttribute("data-bs-parent",`#${"accordion-wrapper"}`)
    
    var contentInnerWrapper = document.createElement("div")
    contentInnerWrapper.setAttribute("class", "accordion-body")
    accordionContent.forEach(panel => {
      contentInnerWrapper.appendChild(panel)
    })
    contentOuterWrapper.append(contentInnerWrapper)
    
    
    itemWrapper.append(titleWrapper)
    itemWrapper.append(contentOuterWrapper)
    accordionWrapper.append(itemWrapper)
    item.remove()
  })
  accordion.append(accordionWrapper)
})
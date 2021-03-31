var tabsets = document.querySelectorAll('div.section.tabset')
tabsets.forEach(tabset => {
  tabWrapper = document.createElement("ul")
  tabWrapper.setAttribute("class", "nav nav-tabs")
  tabWrapper.setAttribute("id", "myTab")
  tabWrapper.setAttribute("role",  "tablist")
  
  tabContents = document.createElement("div")
  tabContents.setAttribute("class", "tab-content")
  tabContents.setAttribute("id", "myTabContent")
  
  
  var tabs = tabset.querySelectorAll('div.section.tab')
  tabs.forEach((tab, idx) => {
    const tabID = tab.id
    const tabTitle = tab.querySelector('h2, h3, h4, h5')
    const tabPanel = tab.querySelectorAll("div.section.tab > :not(:first-child)")
    
    
    var li = document.createElement("li")
    li.setAttribute("class", "nav-item")
    li.setAttribute("role", "presentation")
    var btn = document.createElement("button")
    
    btn.setAttribute("class", `nav-link ${idx===0 ? "active" : null}`)
    btn.setAttribute("id",`${tabID}-tab`)
    btn.setAttribute("data-bs-toggle", "tab")
    btn.setAttribute("data-bs-target", `#${tabID}`)
    btn.setAttribute("type", "button")
    btn.setAttribute("role", "tab")
    btn.setAttribute("aria-controls",`${tabID}`)
    btn.setAttribute("aria-selected", "true")
    btn.appendChild(tabTitle)
    
    li.appendChild(btn)
    tabWrapper.append(li)
    
    tabContent = document.createElement("div")
    tabContent.setAttribute("class", `tab-pane fade ${idx === 0 ? "show active" : null}`)
    tabContent.setAttribute("id",`${tabID}`)
    tabContent.setAttribute("role", "tabpanel")
    tabContent.setAttribute("aria-labelledby",`${tabID}-tab`)
    
    tabPanel.forEach(panel => {
      tabContent.appendChild(panel)
    })
    tabContents.append(tabContent)
    tab.remove()
  })
  tabset.append(tabWrapper)
  tabset.append(tabContents)
})
function FooterToggle()
{
    const element = document.getElementById("CollapsableFooter")
    if(element.style.display === "block")
    {
        element.style.display = "none"
    }
    else
    {
        element.style.display = "block"
    }
}

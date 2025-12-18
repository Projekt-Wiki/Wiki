function openPage(){
    input = document.getElementById("inputsite");

    if (input.value == "Webbens Historia") {
        window.open("Webben.html","_self")
    } else if (input.value == "HTTP/HTTPS") {
        window.open("HTTP.html","_self")
    } else if (input.value == "Copyright") {
        window.open("Copyright.html","_self")
    } else if (input.value == "DNS") {
        window.open("DNS.html","_self")
    }  else if (input.value == "Programmeringens Historia") {
        window.open("ProgrammeringHistoria.html","_self")
    }  else if (input.value == "AI Historia") {
        window.open("ai-historia.html","_self")
    }
}
var text = new Blotter.Text("prydt", {
    family: "'Open Sans', sans-serif",
    size: 250,
    fill: '#202020'
})

var material = new Blotter.ChannelSplitMaterial()

var blotter = new Blotter(material, {
    texts: text
})

function setOffset(i) {
    material.uniforms.uOffset.value = i
}

function setRotate(i) {
    material.uniforms.uRotation.value = i
}

var upperBound = 0.2,
    lowerBound = 0.01, // 0.025 also looks fine
    current = upperBound

function iterate() {
    if(current <= lowerBound) {
        stopLower()
    }
    setOffset(current)
    current -= 0.002
}

var lower = setInterval(function() {
    iterate()
}, 10)

function stopLower() {
    clearInterval(lower)
}

var e = 360
var turn = setInterval(function() {
    setRotate(--e)
}, 10)


var elem = document.getElementById('text')
var scope =  blotter.forText(text)

scope.appendTo(elem)
// My first Dictionary for the zombie NPC
var npc =
            {
                title:"zombie", //Name
                team:"Infection",
                type:"Humanoid",
                health:"100",
                armor:"0"
            }

//Return health of npc
function dictionary_npcs()
    {
        document.getElementById("dictionary").innerHTML = npc.armor; // print the armour number in the specified element 
    }

//Delete a KVP from the dictionary
function ft_delete()
    {
        delete npc.armor;// Delete the armor kvp because it is not used for zombies
        document.getElementById("dictionary").innerHTML = npc.armor; // display armour for debugging
    }
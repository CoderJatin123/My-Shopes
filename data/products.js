const data = 
[
{ pid: 1, price: 33490, name: "Lenovo IdeaPad Slim 3 Intel Core i3-1115G4 11th Gen 15.6(39.62cm) FHD Laptop (8GB/256GB SSD/Win 11/Office 2021/2 Year Warranty/3 Month Game Pass/Platinum Grey/1.7Kg)", image: "https://m.media-amazon.com/images/I/61Dw5Z8LzJL._SY450_.jpg", rating: 4,tag:["Laptop","Desktop","Electronic","Computer","Lenovo","Lenovo Laptop","Lenovo IdeaPad"] },


{ pid: 2, price: 33490, name: "ASUS Vivobook 14, 14.0-inch (35.56 cms) HD, Intel Core i3-1005G1 10th Gen, Thin and Light Laptop (8GB/512GB SSD/Integrated Graphics/Windows 11/Office 2021/Silver/1.60 kg), X415JA-BV322WS", image: "https://m.media-amazon.com/images/I/71WuDXpTAlL._SY450_.jpg", rating: 5,tag:["Laptop","Desktop","Computer","ASUS","ASUS Laptop","Vivobook 14"] },

{ pid: 3, price: 42490, name: "HP 15s,11th Gen Intel Core i3-1115G4 8GB RAM/512GB SSD 15.6-inch(39.6 cm) Micro-Edge Anti-Glare FHD Laptop/Alexa Built-in/Win 11/Intel UHD Graphics/Dual Speakers", image: "https://m.media-amazon.com/images/I/81U9aJnFu6L._SX679_.jpg", rating: 4 ,tag:["Laptop","Desktop","Electronic","Computer","HP","HP Laptop","HP 15s"] },

{ pid: 4, price: 37990, name: "HP 14s, 11th Gen Intel Core i3-1115G4, 8GB RAM/256GB SSD 14-inch(35.6 cm) Micro-Edge, Anti-Glare, FHD Laptop/Alexa Built-in/Win 11/Intel UHD Graphics/Dual Speakers", image: "https://m.media-amazon.com/images/I/41h8nAsiOQL._SX300_SY300_QL70_FMwebp_.jpg", rating: 4, tag:["Laptop","Desktop","Electronic","Computer","HP 14s","HP","HP Laptop"] }

]

const trending=
[ "HP 14s","Lenovo IdeaPad","HP 15s" ]

const FullData = [
  {
    pid: 1,
    price: 33490,
    name: "Lenovo IdeaPad Slim 3 Intel Core i3-1115G4 11th Gen 15.6(39.62cm) FHD Laptop (8GB/256GB SSD/Win 11/Office 2021/2 Year Warranty/3 Month Game Pass/Platinum Grey/1.7Kg)",
    image: "https://m.media-amazon.com/images/I/61Dw5Z8LzJL._SY450_.jpg",
    rating: 4,

    specification: {
      parameter: [
        { name: "MobelName", value: "IdeaPad" },
        { name: "Brand", value: "Lenovo" },
        { name: "Color", value: "Platinum Grey" },
        { name: "RAM Memory Installed Size", value: "8 GB" },
        { name: "CPU model", value: "core-i3" },
        { name: "Operating System", value: "Windows 11 Home" },
        { name: "Graphics Card", value: "Integrated" },
        { name: "Size", value: "1*2*3" },
        { name: "Capacity", value: "2h" },
        { name: "Type", value: "Electronic" },
      ],

      description: {
        paragraph: [
          "Processor: 11th Gen Intel Core i3-1115G4 | Speed: 3.0 GHz (Base) - 4.1 GHz (Max) | 2 Cores | 4 Threads | 6MB Cache",
          "OS & Software: Windows 11 Home 64 | Office Home and Student 2021 | Xbox GamePass Ultimate 3-month subscription*",
          "Graphics: Integrated Intel UHD Graphics | Memory: 8GB RAM DDR4-2666, Upgradable Up to 12GB | Storage: 256 GB SSD",
          "Display: 15.6 FHD (1920x1080) | TN Technology Display | 220Nits Brightness | Anti Glare",
          "Design: 4 side narrow bezel | 1.99 cm & 1.7 kg | Non-backlit Keyboard || Connectivity: Wi-Fi 5 (11ac | 2x2) | BT 5.0"
        ],
      },
    },
    tag:["Laptop","Desktop","Electronic","Computer","Lenovo","Lenovo Laptop","Lenovo IdeaPad"]
  },

  {
    pid: 2, price: 32990, name: "ASUS Vivobook 14, 14.0-inch (35.56 cms) HD, Intel Core i3-1005G1 10th Gen, Thin and Light Laptop (8GB/512GB SSD/Integrated Graphics/Windows 11/Office 2021/Silver/1.60 kg), X415JA-BV322WS",
    image: "https://m.media-amazon.com/images/I/71WuDXpTAlL._SY450_.jpg",
    rating: 5,

    specification: {
      parameter: [
        { name: "MobelName", value: "Vivobook 14" },
        { name: "Brand", value: "ASUS" },
        { name: "Color", value: "Silver" },
        { name: "RAM Memory Installed Size", value: "8 GB" },
        { name: "CPU model", value: "core-i3" },
        { name: "Operating System", value: "Windows 11 Home" },
        { name: "Graphics Card", value: "Integrated" },
        { name: "Capacity", value: "2h" },
        { name: "Type", value: "Electronic" },
      ],

      description: {
        paragraph: [
          "Processor: 10th Gen Intel Core i3-1005G1, 1.2 GHz Base speed (4MB Cache, up to 3.4 GHz Max Turbo Speed, 2 cores)",
          "Memory: 8GB (4GB onboard + 4GB SO-DIMM) DDR4 with | Storage: 512GB M.2 NVMe PCIe 3.0 SSD with empty 1x 2.5-inch Slot for HDD Storage",
          "Display: 14.0-inch (35.56 cm) HD 16:9 aspect ratio LED Backlit 250nits, IPS-level Panel, Anti-glare display, 82 % Screen-to-body ratio",
          "Operating System: Windows 11 Home | Software: Office Home and Student 2021 included",
          "Design: 1.99 cm Thin | Thin & Light | 1.60 kg weight | 37WHrs Battery Capacity | Up to 6 hours Battery life, Note: Battery life depends on conditions of usage"
        ],
      },
    },
    tag:["Laptop","Desktop","Computer","ASUS","ASUS Laptop","Vivobook 14"]
  },

  {
    pid: 3, price: 42490, name: "HP 15s,11th Gen Intel Core i3-1115G4 8GB RAM/512GB SSD 15.6-inch(39.6 cm) Micro-Edge Anti-Glare FHD Laptop/Alexa Built-in/Win 11/Intel UHD Graphics/Dual Speakers", image: "https://m.media-amazon.com/images/I/81U9aJnFu6L._SX679_.jpg", rating: 4 
    ,

    specification: {
      parameter: [
        { name: "MobelName", value: "HP 14" },
        { name: "Brand", value: "HP" },
        { name: "Color", value: "	Natural Silver" },
        { name: "RAM Memory Installed Size", value: "8 GB" },
        { name: "CPU model", value: "core-i3" },
        { name: "Operating System", value: "Windows 11 Home" },
        { name: "Graphics Card", value: "Integrated" },
        { name: "Capacity", value: "2h" },
        { name: "Type", value: "Electronic" },
      ],

      description: {
        paragraph: [
          "Processor: 10th Gen Intel Core i3-1005G1, 1.2 GHz Base speed (4MB Cache, up to 3.4 GHz Max Turbo Speed, 2 cores)",
          "Memory: 8GB (4GB onboard + 4GB SO-DIMM) DDR4 with | Storage: 512GB M.2 NVMe PCIe 3.0 SSD with empty 1x 2.5-inch Slot for HDD Storage",
          "Display: 14.0-inch (35.56 cm) HD 16:9 aspect ratio LED Backlit 250nits, IPS-level Panel, Anti-glare display, 82 % Screen-to-body ratio",
          "Operating System: Windows 11 Home | Software: Office Home and Student 2021 included",
          "Design: 1.99 cm Thin | Thin & Light | 1.60 kg weight | 37WHrs Battery Capacity | Up to 6 hours Battery life, Note: Battery life depends on conditions of usage"
        ],
      },
    },
    tag:["Laptop","Desktop","Electronic","Computer","HP","HP Laptop","HP 15s"]
  },

  {
    pid: 4, price: 37990, name: "HP 14s, 11th Gen Intel Core i3-1115G4, 8GB RAM/256GB SSD 14-inch(35.6 cm) Micro-Edge, Anti-Glare, FHD Laptop/Alexa Built-in/Win 11/Intel UHD Graphics/Dual Speakers", image: "https://m.media-amazon.com/images/I/41h8nAsiOQL._SX300_SY300_QL70_FMwebp_.jpg", rating: 4 
    ,

    specification: {
      parameter: [
        { name: "MobelName", value: "Vivobook 14" },
        { name: "Brand", value: "HP" },
        { name: "Color", value: "	Natural Silver" },
        { name: "RAM Memory Installed Size", value: "8 GB" },
        { name: "CPU model", value: "core-i3" },
        { name: "Operating System", value: "Windows 11 Home" },
        { name: "Graphics Card", value: "Integrated" },
        { name: "Capacity", value: "2h" },
        { name: "Type", value: "Electronic" },
      ],

      description: {
        paragraph: [
          "Processor: 10th Gen Intel Core i3-1005G1, 1.2 GHz Base speed (4MB Cache, up to 3.4 GHz Max Turbo Speed, 2 cores)",
          "Memory: 8GB (4GB onboard + 4GB SO-DIMM) DDR4 with | Storage: 512GB M.2 NVMe PCIe 3.0 SSD with empty 1x 2.5-inch Slot for HDD Storage",
          "Display: 14.0-inch (35.56 cm) HD 16:9 aspect ratio LED Backlit 250nits, IPS-level Panel, Anti-glare display, 82 % Screen-to-body ratio",
          "Operating System: Windows 11 Home | Software: Office Home and Student 2021 included",
          "Design: 1.99 cm Thin | Thin & Light | 1.60 kg weight | 37WHrs Battery Capacity | Up to 6 hours Battery life, Note: Battery life depends on conditions of usage"
        ],
      },
    },
    tag:["Laptop","Desktop","Electronic","Computer","HP 14s","HP","HP Laptop"]
  }

]


const tagList=["Laptop","Desktop","Electronic","Computer","Lenovo","Lenovo Laptop","ASUS","ASUS Laptop","HP 15s",
"HP 14s","Vivobook 14","Lenovo IdeaPad","HP"]

export { data,trending,FullData,tagList}
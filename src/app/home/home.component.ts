import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    console.log(this.category);

  }
  mp4data: any = [
    {
      size: '10 MB',
      format: 'mp4',
      resolution: '1920x1080',
      downloadLink: 'https://example.com/download1',
    },
    {
      size: '15 MB',
      format: 'mp4',
      resolution: '2560x1440',
      downloadLink: 'https://example.com/download2',
    },
    {
      size: '8 MB',
      format: 'mp4',
      resolution: '1280x720',
      downloadLink: 'https://example.com/download3',
    },
    {
      size: '12 MB',
      format: 'mp4',
      resolution: '3840x2160',
      downloadLink: 'https://example.com/download4',
    },
    {
      size: '18 MB',
      format: 'mp4',
      resolution: 'NA',
      downloadLink: 'https://example.com/download5',
    },
    {
      size: '14 MB',
      format: 'mp4',
      resolution: '1920x1080',
      downloadLink: 'https://example.com/download6',
    },
    {
      size: '20 MB',
      format: 'mp4',
      resolution: '3840x2160',
      downloadLink: 'https://example.com/download7',
    },
    {
      size: '7 MB',
      format: 'mp4',
      resolution: '800x600',
      downloadLink: 'https://example.com/download8',
    },
    {
      size: '22 MB',
      format: 'mp4',
      resolution: '5120x2880',
      downloadLink: 'https://example.com/download9',
    },
    {
      size: '30 MB',
      format: 'mp4',
      resolution: 'NA',
      downloadLink: 'https://example.com/download10',
    },
    {
      size: '25 MB',
      format: 'mp4',
      resolution: '3840x2160',
      downloadLink: 'https://example.com/download11',
    },
    {
      size: '18 MB',
      format: 'mp4',
      resolution: '2560x1440',
      downloadLink: 'https://example.com/download12',
    },
    {
      size: '5 MB',
      format: 'mp4',
      resolution: '640x480',
      downloadLink: 'https://example.com/download13',
    },
    {
      size: '28 MB',
      format: 'mp4',
      resolution: '7680x4320',
      downloadLink: 'https://example.com/download14',
    },
    {
      size: '40 MB',
      format: 'mp4',
      resolution: 'NA',
      downloadLink: 'https://example.com/download15',
    },
    {
      size: '32 MB',
      format: 'mp4',
      resolution: '5120x2880',
      downloadLink: 'https://example.com/download16',
    },
    {
      size: '24 MB',
      format: 'mp4',
      resolution: '3840x2160',
      downloadLink: 'https://example.com/download17',
    },
    {
      size: '6 MB',
      format: 'mp4',
      resolution: '1024x768',
      downloadLink: 'https://example.com/download18',
    },
    {
      size: '35 MB',
      format: 'mp4',
      resolution: '6144x3456',
      downloadLink: 'https://example.com/download19',
    },
    {
      size: '45 MB',
      format: 'mp4',
      resolution: 'NA',
      downloadLink: 'https://example.com/download20',
    },
  ];
  flvdata: any = [
    {
      size: '10 MB',
      format: 'flv',
      resolution: '1920x1080',
      downloadLink: 'https://example.com/download1',
    },
    {
      size: '15 MB',
      format: 'flv',
      resolution: '2560x1440',
      downloadLink: 'https://example.com/download2',
    },
    {
      size: '8 MB',
      format: 'flv',
      resolution: '1280x720',
      downloadLink: 'https://example.com/download3',
    },
    {
      size: '12 MB',
      format: 'flv',
      resolution: '3840x2160',
      downloadLink: 'https://example.com/download4',
    },
    {
      size: '18 MB',
      format: 'flv',
      resolution: 'NA',
      downloadLink: 'https://example.com/download5',
    },
    {
      size: '14 MB',
      format: 'flv',
      resolution: '1920x1080',
      downloadLink: 'https://example.com/download6',
    },
    {
      size: '20 MB',
      format: 'flv',
      resolution: '3840x2160',
      downloadLink: 'https://example.com/download7',
    },
    {
      size: '7 MB',
      format: 'flv',
      resolution: '800x600',
      downloadLink: 'https://example.com/download8',
    },
    {
      size: '22 MB',
      format: 'flv',
      resolution: '5120x2880',
      downloadLink: 'https://example.com/download9',
    },
    {
      size: '30 MB',
      format: 'flv',
      resolution: 'NA',
      downloadLink: 'https://example.com/download10',
    },
    {
      size: '25 MB',
      format: 'flv',
      resolution: '3840x2160',
      downloadLink: 'https://example.com/download11',
    },
    {
      size: '18 MB',
      format: 'flv',
      resolution: '2560x1440',
      downloadLink: 'https://example.com/download12',
    },
    {
      size: '5 MB',
      format: 'flv',
      resolution: '640x480',
      downloadLink: 'https://example.com/download13',
    },
    {
      size: '28 MB',
      format: 'flv',
      resolution: '7680x4320',
      downloadLink: 'https://example.com/download14',
    },
    {
      size: '40 MB',
      format: 'flv',
      resolution: 'NA',
      downloadLink: 'https://example.com/download15',
    },
    {
      size: '32 MB',
      format: 'flv',
      resolution: '5120x2880',
      downloadLink: 'https://example.com/download16',
    },
    {
      size: '24 MB',
      format: 'flv',
      resolution: '3840x2160',
      downloadLink: 'https://example.com/download17',
    },
    {
      size: '6 MB',
      format: 'flv',
      resolution: '1024x768',
      downloadLink: 'https://example.com/download18',
    },
    {
      size: '35 MB',
      format: 'flv',
      resolution: '6144x3456',
      downloadLink: 'https://example.com/download19',
    },
    {
      size: '45 MB',
      format: 'flv',
      resolution: 'NA',
      downloadLink: 'https://example.com/download20',
    },
  ];
  mkvdata: any = [
    {
      size: '10 MB',
      format: 'mkv',
      resolution: '1920x1080',
      downloadLink: 'https://example.com/download1',
    },
    {
      size: '15 MB',
      format: 'mkv',
      resolution: '2560x1440',
      downloadLink: 'https://example.com/download2',
    },
    {
      size: '8 MB',
      format: 'mkv',
      resolution: '1280x720',
      downloadLink: 'https://example.com/download3',
    },
    {
      size: '12 MB',
      format: 'mkv',
      resolution: '3840x2160',
      downloadLink: 'https://example.com/download4',
    },
    {
      size: '18 MB',
      format: 'mkv',
      resolution: 'NA',
      downloadLink: 'https://example.com/download5',
    },
    {
      size: '14 MB',
      format: 'mkv',
      resolution: '1920x1080',
      downloadLink: 'https://example.com/download6',
    },
    {
      size: '20 MB',
      format: 'mkv',
      resolution: '3840x2160',
      downloadLink: 'https://example.com/download7',
    },
    {
      size: '7 MB',
      format: 'mkv',
      resolution: '800x600',
      downloadLink: 'https://example.com/download8',
    },
    {
      size: '22 MB',
      format: 'mkv',
      resolution: '5120x2880',
      downloadLink: 'https://example.com/download9',
    },
    {
      size: '30 MB',
      format: 'mkv',
      resolution: 'NA',
      downloadLink: 'https://example.com/download10',
    },
    {
      size: '25 MB',
      format: 'mkv',
      resolution: '3840x2160',
      downloadLink: 'https://example.com/download11',
    },
    {
      size: '18 MB',
      format: 'mkv',
      resolution: '2560x1440',
      downloadLink: 'https://example.com/download12',
    },
    {
      size: '5 MB',
      format: 'mkv',
      resolution: '640x480',
      downloadLink: 'https://example.com/download13',
    },
    {
      size: '28 MB',
      format: 'mkv',
      resolution: '7680x4320',
      downloadLink: 'https://example.com/download14',
    },
    {
      size: '40 MB',
      format: 'mkv',
      resolution: 'NA',
      downloadLink: 'https://example.com/download15',
    },
  ];
  gpdata: any = [
    {
      size: '10 MB',
      format: '3gp',
      resolution: '1920x1080',
      downloadLink: 'https://example.com/download1',
    },
    {
      size: '15 MB',
      format: '3gp',
      resolution: '2560x1440',
      downloadLink: 'https://example.com/download2',
    },
    {
      size: '8 MB',
      format: '3gp',
      resolution: '1280x720',
      downloadLink: 'https://example.com/download3',
    },
    {
      size: '12 MB',
      format: '3gp',
      resolution: '3840x2160',
      downloadLink: 'https://example.com/download4',
    },
    {
      size: '18 MB',
      format: '3gp',
      resolution: 'NA',
      downloadLink: 'https://example.com/download5',
    },
    {
      size: '14 MB',
      format: '3gp',
      resolution: '1920x1080',
      downloadLink: 'https://example.com/download6',
    },
  ]

  category: any = [
    {
      category_id: 1,
      category_name: "Videos",
      url: 'sample-videos',
      sub_category: [
        {
          subcategory_id: 11,
          subcategory_name: "MP4",
          url: 'sample-mp4-videos',
          files: [{
            id: 111,
            url: 'asdasd.mp4',
            size: 1024,
            format: 'mp4',
            resolution: '1024 X 1024'
          }, {
            id: 112,
            url: 'asdasd.mp4',
            size: 1024,
            format: 'mp4',
            resolution: '1024 X 1024'
          },
          {
            id: 113,
            url: 'asdasd.mp4',
            size: 1024,
            format: 'mp4',
            resolution: '1024 X 1024'
          },
          {
            id: 114,
            url: 'asdasd.mp4',
            size: 1024,
            format: 'mp4',
            resolution: '1024 X 1024'
          },
          {
            id: 115,
            url: 'asdasd.mp4',
            size: 1024,
            format: 'mp4',
            resolution: '1024 X 1024'
          }
          ]
        },
        {
          subcategory_id: 12,
          subcategory_name: "flv",
          url: 'sample-flv-videos',
          files: [{
            id: 111,
            url: 'asdasd.flv',
            size: 1024,
            format: 'flv',
            resolution: '1024 X 1024'
          }, {
            id: 112,
            url: 'asdasd.flv',
            size: 1024,
            format: 'flv',
            resolution: '1024 X 1024'
          },
          {
            id: 113,
            url: 'asdasd.flv',
            size: 1024,
            format: 'flv',
            resolution: '1024 X 1024'
          },
          {
            id: 114,
            url: 'asdasd.flv',
            size: 1024,
            format: 'flv',
            resolution: '1024 X 1024'
          },
          {
            id: 115,
            url: 'asdasd.flv',
            size: 1024,
            format: 'flv',
            resolution: '1024 X 1024'
          }
          ]
        },
        {
          subcategory_id: 13,
          subcategory_name: "Mkv",
          url: 'sample-Mkv-videos',
          File: [{
            id: 111,
            url: 'asdasd.Mkv',
            size: 1024,
            format: 'Mkv',
            resolution: '1024 X 1024'
          }, {
            id: 112,
            url: 'asdasd.Mkv',
            size: 1024,
            format: 'Mkv',
            resolution: '1024 X 1024'
          },
          {
            id: 113,
            url: 'asdasd.Mkv',
            size: 1024,
            format: 'Mkv',
            resolution: '1024 X 1024'
          },
          {
            id: 114,
            url: 'asdasd.Mkv',
            size: 1024,
            format: 'Mkv',
            resolution: '1024 X 1024'
          },
          {
            id: 115,
            url: 'asdasd.Mkv',
            size: 1024,
            format: 'Mkv',
            resolution: '1024 X 1024'
          }
          ]
        },
        {
          subcategory_id: 11,
          subcategory_name: "3GP",
          url: 'sample-3GP-videos',
          File: [{
            id: 111,
            url: 'asdasd.3GP',
            size: 1024,
            format: '3GP',
            resolution: '1024 X 1024'
          }, {
            id: 112,
            url: 'asdasd.3GP',
            size: 1024,
            format: '3GP',
            resolution: '1024 X 1024'
          },
          {
            id: 113,
            url: 'asdasd.3GP',
            size: 1024,
            format: '3GP',
            resolution: '1024 X 1024'
          },
          {
            id: 114,
            url: 'asdasd.3GP',
            size: 1024,
            format: '3GP',
            resolution: '1024 X 1024'
          },
          {
            id: 115,
            url: 'asdasd.3GP',
            size: 1024,
            format: '3GP',
            resolution: '1024 X 1024'
          }
          ]
        },
      ]
    },
    {
      category_id: 2,
      category_name: "Images",
      url: 'sample-Images',
      sub_category: [
        {
          subcategory_id: 12,
          subcategory_name: "JPG",
          url: 'sample-JPG-Images',
          file: [{
            id: 111,
            url: 'asdasd.JPG',
            size: 1024,
            format: 'JPG',
            resolution: '1024 X 1024'
          }, {
            id: 112,
            url: 'asdasd.JPG',
            size: 1024,
            format: 'JPG',
            resolution: '1024 X 1024'
          },
          {
            id: 113,
            url: 'asdasd.JPG',
            size: 1024,
            format: 'JPG',
            resolution: '1024 X 1024'
          },
          {
            id: 114,
            url: 'asdasd.JPG',
            size: 1024,
            format: 'JPG',
            resolution: '1024 X 1024'
          },
          {
            id: 115,
            url: 'asdasd.JPG',
            size: 1024,
            format: 'JPG',
            resolution: '1024 X 1024'
          }
          ]
        },
        {
          subcategory_id: 12,
          subcategory_name: "PNG",
          url: 'sample-PNG-Audio',
          file: [{
            id: 111,
            url: 'asdasd.PNG',
            size: 1024,
            format: 'PNG',
            resolution: '1024 X 1024'
          }, {
            id: 112,
            url: 'asdasd.PNG',
            size: 1024,
            format: 'PNG',
            resolution: '1024 X 1024'
          },
          {
            id: 113,
            url: 'asdasd.PNG',
            size: 1024,
            format: 'PNG',
            resolution: '1024 X 1024'
          },
          {
            id: 114,
            url: 'asdasd.PNG',
            size: 1024,
            format: 'PNG',
            resolution: '1024 X 1024'
          },
          {
            id: 115,
            url: 'asdasd.PNG',
            size: 1024,
            format: 'PNG',
            resolution: '1024 X 1024'
          }
          ]
        },
        {
          subcategory_id: 12,
          subcategory_name: "GIF",
          url: 'sample-GIF-Audio',
          file: [{
            id: 111,
            url: 'asdasd.GIF',
            size: 1024,
            format: 'GIF',
            resolution: '1024 X 1024'
          }, {
            id: 112,
            url: 'asdasd.GIF',
            size: 1024,
            format: 'GIF',
            resolution: '1024 X 1024'
          },
          {
            id: 113,
            url: 'asdasd.GIF',
            size: 1024,
            format: 'GIF',
            resolution: '1024 X 1024'
          },
          {
            id: 114,
            url: 'asdasd.GIF',
            size: 1024,
            format: 'GIF',
            resolution: '1024 X 1024'
          },
          {
            id: 115,
            url: 'asdasd.GIF',
            size: 1024,
            format: 'GIF',
            resolution: '1024 X 1024'
          }
          ]
        },
        {
          subcategory_id: 12,
          subcategory_name: "SVG",
          url: 'sample-SVG-Audio',
          file: [{
            id: 111,
            url: 'asdasd.SVG',
            size: 1024,
            format: 'SVG',
            resolution: '1024 X 1024'
          }, {
            id: 112,
            url: 'asdasd.SVG',
            size: 1024,
            format: 'SVG',
            resolution: '1024 X 1024'
          },
          {
            id: 113,
            url: 'asdasd.SVG',
            size: 1024,
            format: 'SVG',
            resolution: '1024 X 1024'
          },
          {
            id: 114,
            url: 'asdasd.SVG',
            size: 1024,
            format: 'SVG',
            resolution: '1024 X 1024'
          },
          {
            id: 115,
            url: 'asdasd.SVG',
            size: 1024,
            format: 'SVG',
            resolution: '1024 X 1024'
          }
          ]
        },
      ]
    },
    {
      category_id: 3,
      category_name: "Audio",
      url: 'sample-Audio',
      sub_category: [{
        subcategory_id: 11,
        subcategory_name: "MP3",
        url: 'sample-MP3-Audio',
        file: [{
          id: 111,
          url: 'asdasd.MP3',
          size: 1024,
          format: 'MP3',
          resolution: '1024 X 1024'
        }, {
          id: 112,
          url: 'asdasd.MP3',
          size: 1024,
          format: 'MP3',
          resolution: '1024 X 1024'
        },
        {
          id: 113,
          url: 'asdasd.MP3',
          size: 1024,
          format: 'MP3',
          resolution: '1024 X 1024'
        },
        {
          id: 114,
          url: 'asdasd.MP3',
          size: 1024,
          format: 'MP3',
          resolution: '1024 X 1024'
        },
        {
          id: 115,
          url: 'asdasd.MP3',
          size: 1024,
          format: 'MP3',
          resolution: '1024 X 1024'
        }
        ]
      }]
    },
    {
      category_id: 4,
      category_name: "Files",
      url: 'sample-Files',
      sub_category: [
        {
          subcategory_id: 11,
          sub_category: "Sample XLS",
          url: 'sample-XLS-Files',
          file: [{
            id: 111,
            url: 'asdasd.XLS',
            size: 1024,
            format: 'XLS',
            resolution: '1024 X 1024'
          }, {
            id: 112,
            url: 'asdasd.XLS',
            size: 1024,
            format: 'XLS',
            resolution: '1024 X 1024'
          },
          {
            id: 113,
            url: 'asdasd.XLS',
            size: 1024,
            format: 'XLS',
            resolution: '1024 X 1024'
          },
          {
            id: 114,
            url: 'asdasd.XLS',
            size: 1024,
            format: 'XLS',
            resolution: '1024 X 1024'
          },
          {
            id: 115,
            url: 'asdasd.XLS',
            size: 1024,
            format: 'XLS',
            resolution: '1024 X 1024'
          }
          ]
        },
        {
          subcategory_id: 11,
          subcategory_name: "Sample Csv",
          url: 'sample-Csv-Files',
          file: [{
            id: 111,
            url: 'asdasd.Csv',
            size: 1024,
            format: 'Csv',
            resolution: '1024 X 1024'
          }, {
            id: 112,
            url: 'asdasd.Csv',
            size: 1024,
            format: 'Csv',
            resolution: '1024 X 1024'
          },
          {
            id: 113,
            url: 'asdasd.Csv',
            size: 1024,
            format: 'Csv',
            resolution: '1024 X 1024'
          },
          {
            id: 114,
            url: 'asdasd.Csv',
            size: 1024,
            format: 'Csv',
            resolution: '1024 X 1024'
          },
          {
            id: 115,
            url: 'asdasd.Csv',
            size: 1024,
            format: 'Csv',
            resolution: '1024 X 1024'
          }
          ]
        },
        {
          subcategory_id: 11,
          subcategory_name: "Sample Doc Files",
          url: 'sample-DocFiles-Files',
          file: [{
            id: 111,
            url: 'asdasd.DocFiles',
            size: 1024,
            format: 'Doc Files',
            resolution: '1024 X 1024'
          }, {
            id: 112,
            url: 'asdasd.Doc Files',
            size: 1024,
            format: 'Doc Files',
            resolution: '1024 X 1024'
          },
          {
            id: 113,
            url: 'asdasd.Doc Files',
            size: 1024,
            format: 'Doc Files',
            resolution: '1024 X 1024'
          },
          {
            id: 114,
            url: 'asdasd.Doc Files',
            size: 1024,
            format: 'Doc Files',
            resolution: '1024 X 1024'
          },
          {
            id: 115,
            url: 'asdasd.Doc Files',
            size: 1024,
            format: 'Doc Files',
            resolution: '1024 X 1024'
          }
          ]
        },
        {
          subcategory_id: 11,
          subcategory_name: "Sample SQL",
          url: 'sample-sql-Files',
          file: [{
            id: 111,
            url: 'asdasd.sql',
            size: 1024,
            format: 'sql',
            resolution: '1024 X 1024'
          }, {
            id: 112,
            url: 'asdasd.sql',
            size: 1024,
            format: 'sql',
            resolution: '1024 X 1024'
          },
          {
            id: 113,
            url: 'asdasd.sql',
            size: 1024,
            format: 'sql',
            resolution: '1024 X 1024'
          },
          {
            id: 114,
            url: 'asdasd.sql',
            size: 1024,
            format: 'sql',
            resolution: '1024 X 1024'
          },
          {
            id: 115,
            url: 'asdasd.sql',
            size: 1024,
            format: 'sql',
            resolution: '1024 X 1024'
          }
          ]
        },
        {
          subcategory_id: 11,
          subcategory_name: "Sample PPT",
          url: 'sample-ppt-Files',
          file: [{
            id: 111,
            url: 'asdasd.ppt',
            size: 1024,
            format: 'ppt',
            resolution: '1024 X 1024'
          }, {
            id: 112,
            url: 'asdasd.ppt',
            size: 1024,
            format: 'ppt',
            resolution: '1024 X 1024'
          },
          {
            id: 113,
            url: 'asdasd.ppt',
            size: 1024,
            format: 'ppt',
            resolution: '1024 X 1024'
          },
          {
            id: 114,
            url: 'asdasd.ppt',
            size: 1024,
            format: 'ppt',
            resolution: '1024 X 1024'
          },
          {
            id: 115,
            url: 'asdasd.ppt',
            size: 1024,
            format: 'ppt',
            resolution: '1024 X 1024'
          }
          ]
        },
        {
          subcategory_id: 11,
          subcategory_name: "Sample PDF",
          url: 'sample-pdf-Files',
          file: [{
            id: 111,
            url: 'asdasd.pdf',
            size: 1024,
            format: 'pdf',
            resolution: '1024 X 1024'
          }, {
            id: 112,
            url: 'asdasd.pdf',
            size: 1024,
            format: 'pdf',
            resolution: '1024 X 1024'
          },
          {
            id: 113,
            url: 'asdasd.pdf',
            size: 1024,
            format: 'pdf',
            resolution: '1024 X 1024'
          },
          {
            id: 114,
            url: 'asdasd.pdf',
            size: 1024,
            format: 'pdf',
            resolution: '1024 X 1024'
          },
          {
            id: 115,
            url: 'asdasd.pdf',
            size: 1024,
            format: 'pdf',
            resolution: '1024 X 1024'
          }
          ]
        },
        {
          subcategory_id: 11,
          subcategory_name: "Sample TXT",
          url: 'sample-txt-Files',
          file: [{
            id: 111,
            url: 'asdasd.txt',
            size: 1024,
            format: 'txt',
            resolution: '1024 X 1024'
          }, {
            id: 112,
            url: 'asdasd.txt',
            size: 1024,
            format: 'txt',
            resolution: '1024 X 1024'
          },
          {
            id: 113,
            url: 'asdasd.txt',
            size: 1024,
            format: 'txt',
            resolution: '1024 X 1024'
          },
          {
            id: 114,
            url: 'asdasd.txt',
            size: 1024,
            format: 'txt',
            resolution: '1024 X 1024'
          },
          {
            id: 115,
            url: 'asdasd.txt',
            size: 1024,
            format: 'txt',
            resolution: '1024 X 1024'
          }
          ]
        },
        {
          subcategory_id: 11,
          subcategory_name: "Sample ZIP",
          url: 'sample-zip-Files',
          file: [{
            id: 111,
            url: 'asdasd.zip',
            size: 1024,
            format: 'zip',
            resolution: '1024 X 1024'
          }, {
            id: 112,
            url: 'asdasd.zip',
            size: 1024,
            format: 'zip',
            resolution: '1024 X 1024'
          },
          {
            id: 113,
            url: 'asdasd.zip',
            size: 1024,
            format: 'zip',
            resolution: '1024 X 1024'
          },
          {
            id: 114,
            url: 'asdasd.zip',
            size: 1024,
            format: 'zip',
            resolution: '1024 X 1024'
          },
          {
            id: 115,
            url: 'asdasd.zip',
            size: 1024,
            format: 'zip',
            resolution: '1024 X 1024'
          }
          ]
        },
        {
          subcategory_id: 11,
          subcategory_name: "Sample PSD",
          url: 'sample-psd-Files',
          file: [{
            id: 111,
            url: 'asdasd.psd',
            size: 1024,
            format: 'psd',
            resolution: '1024 X 1024'
          }, {
            id: 112,
            url: 'asdasd.psd',
            size: 1024,
            format: 'psd',
            resolution: '1024 X 1024'
          },
          {
            id: 113,
            url: 'asdasd.psd',
            size: 1024,
            format: 'psd',
            resolution: '1024 X 1024'
          },
          {
            id: 114,
            url: 'asdasd.psd',
            size: 1024,
            format: 'psd',
            resolution: '1024 X 1024'
          },
          {
            id: 115,
            url: 'asdasd.psd',
            size: 1024,
            format: 'psd',
            resolution: '1024 X 1024'
          }
          ]
        },
        {
          subcategory_id: 11,
          subcategory_name: "Sample DXF",
          url: 'sample-dxf-Files',
          file: [{
            id: 111,
            url: 'asdasd.dxf',
            size: 1024,
            format: 'dxf',
            resolution: '1024 X 1024'
          }, {
            id: 112,
            url: 'asdasd.dxf',
            size: 1024,
            format: 'dxf',
            resolution: '1024 X 1024'
          },
          {
            id: 113,
            url: 'asdasd.dxf',
            size: 1024,
            format: 'dxf',
            resolution: '1024 X 1024'
          },
          {
            id: 114,
            url: 'asdasd.dxf',
            size: 1024,
            format: 'dxf',
            resolution: '1024 X 1024'
          },
          {
            id: 115,
            url: 'asdasd.dxf',
            size: 1024,
            format: 'dxf',
            resolution: '1024 X 1024'
          }
          ]
        }
      ]
    },
    {
      category_id: 5,
      category_name: "Text",
      url: 'sample-Text',
      sub_category: [{
        subcategory_id: 11,
        subcategory_name: "Text",
        url: 'sample-text-Text',
        file: [{
          id: 111,
          url: 'asdasd.text',
          size: 1024,
          format: 'text',
          resolution: '1024 X 1024'
        }, {
          id: 112,
          url: 'asdasd.text',
          size: 1024,
          format: 'text',
          resolution: '1024 X 1024'
        },
        {
          id: 113,
          url: 'asdasd.text',
          size: 1024,
          format: 'text',
          resolution: '1024 X 1024'
        },
        {
          id: 114,
          url: 'asdasd.text',
          size: 1024,
          format: 'text',
          resolution: '1024 X 1024'
        },
        {
          id: 115,
          url: 'asdasd.text',
          size: 1024,
          format: 'text',
          resolution: '1024 X 1024'
        }
        ]
      }]
    }
  ]


}

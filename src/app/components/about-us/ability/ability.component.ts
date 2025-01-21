import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ability',
  imports: [CommonModule],
  templateUrl: './ability.component.html',
  styleUrl: './ability.component.css'
})
export class AbilityComponent {
  abilities = [
    {
      title: 'Tecnologías de Presentación',
      frontImage: 'assets/icons/sphere.png',
      description: [
        'Aplicaciones Web Responsive: ASP. Net Web Forms',
        'ASP.Net MVC, HTML5, CSS3, Ajax',
        'JavaServer Pages (JSP)',
      ],
    },
    {
      title: 'Tecnologías de Capas Intermedias y Servicios Distribuidos',
      frontImage: 'assets/icons/blocks-and-arrows.png',
      description: [
        '.NET Remoting',
        '.Net Web Services',
        'Windows Communications Foundation (WCF)',
        'ASP.NET Web API 2 (Servicios REST)',
        'Azure Appfabric',
        'OSB (Oracle Service Bus)',
      ],
    },
    {
      title: 'Acceso a Datos y ORM',
      frontImage: 'assets/icons/data-display.png',
      description: ['ODBC', 'ADO', 'ADO.NET', 'Entity Framework', 'Hibernate'],
    },
    {
      title: 'Base de Datos',
      frontImage: 'assets/icons/database-code.png',
      description: [
        'SQL Server 2008-2007',
        'MySQL (4.x,5.x)',
        'Oracle NoSQL (MongoDB, Oracle y otros)',
        'ETL, Teradata, Integración de Datos, SSIS',
      ],
    },
    {
      title: 'Workflows',
      frontImage: 'assets/icons/spanner.png',
      description: ['Windows Workflow Foundation (WPF)'],
    },
    {
      title: 'Reportes',
      frontImage: 'assets/icons/log.png',
      description: [
        'SQL Server Reporting Services',
        'Oracle Reports',
        'Crystal Reports',
      ],
    },
    {
      title: 'IDE',
      frontImage: 'assets/icons/text-recognition.png',
      description: [
        'Visual Studio 2008-2007',
        'Toad',
        'Delphi',
        'NetBeans',
      ],
    },
    {
      title: 'Frameworks',
      frontImage: 'assets/icons/folder-code-one.png',
      description: ['.NET 1.1-4.6', 'Java EE', 'Spring Framework', 'JBoss Seam'],
    },
    {
      title: 'Lenguajes',
      frontImage: 'assets/icons/file-code.png',
      description: [
        'C, C++',
        'C#, Visual Basic, VB.NET',
        'Java, HTML, JavaScript',
        'XML, XAML',
        'T-SQL, PL-SQL',
        'RPG, MongoDB, Teradata',
        'Shell Script, Object Pascal y otros',
      ],
    },
  ];

  groupedAbilities = this.groupAbilities(this.abilities, 3);

  private groupAbilities(abilities: any[], groupSize: number): any[][] {
    const groups: any[][] = [];
    for (let i = 0; i < abilities.length; i += groupSize) {
      groups.push(abilities.slice(i, i + groupSize));
    }
    return groups;
  }
}

CREATE TABLE [dbo].[Holidays]
(
    [Id]          INT            IDENTITY (1, 1) NOT NULL,
    [Name]        NVARCHAR (200) NOT NULL,
    [Date]        DATE           NOT NULL,
    [Description] NVARCHAR (500) NULL,
    [CreatedAt]   DATETIME2 (7)  NOT NULL CONSTRAINT [DF_Holidays_CreatedAt] DEFAULT (SYSUTCDATETIME()),
    [UpdatedAt]   DATETIME2 (7)  NULL,
    [IsDeleted]   BIT            NOT NULL CONSTRAINT [DF_Holidays_IsDeleted] DEFAULT (0),
    CONSTRAINT [PK_Holidays] PRIMARY KEY CLUSTERED ([Id] ASC)
);

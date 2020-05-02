package org.jobrunr.storage.sql.oracle;

import org.jobrunr.storage.sql.SqlStorageProviderTest;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.extension.AfterAllSubclasses;
import org.junit.jupiter.extension.BeforeAllSubclasses;
import org.junit.jupiter.extension.ForAllSubclassesExtension;
import org.testcontainers.containers.OracleContainer;

@ExtendWith(ForAllSubclassesExtension.class)
public abstract class AbstractOracleStorageProviderTest extends SqlStorageProviderTest {

    protected static OracleContainer sqlContainer = new OracleContainer("container-registry.oracle.com/database/standard:12.1.0.2")
            .withStartupTimeoutSeconds(900)
            .withConnectTimeoutSeconds(500)
            .withEnv("DB_SID", "ORCL")
            .withEnv("DB_PASSWD", "oracle")
            .withSharedMemorySize(4294967296L);

    @BeforeAllSubclasses
    public static void startSqlContainer() {
        sqlContainer.start();
    }

    @AfterAllSubclasses
    public static void stopSqlContainer() {
        sqlContainer.stop();
    }
}